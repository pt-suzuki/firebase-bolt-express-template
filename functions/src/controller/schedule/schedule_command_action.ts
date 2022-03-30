import { RespondFn, SlackCommandMiddlewareArgs } from '@slack/bolt';
import { ScheduleService } from '~/domains/schedule/schedule_service';
import { ScheduleTranslator } from '~/domains/schedule/schedule_translator';
import { ScheduleCommandResponder } from './schedule_command_responder';

export class ScheduleCommandAction {
  private responder: ScheduleCommandResponder;
  private service: ScheduleService;
  private translator: ScheduleTranslator;

  constructor(
    responder: ScheduleCommandResponder,
    service: ScheduleService,
    translator: ScheduleTranslator
  ) {
    this.responder = responder;
    this.service = service;
    this.translator = translator;
  }

  invoke(command: SlackCommandMiddlewareArgs['payload'], say: RespondFn): void {
    this.responder.invoke(
      this.service.search(this.translator.translateCommandToCriteria(command)),
      say
    );
  }
}
