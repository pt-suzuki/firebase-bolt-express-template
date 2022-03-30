import { SlackCommandMiddlewareArgs } from '@slack/bolt';
import { ScheduleCriteria } from './schedule_criteria';

export interface ScheduleTranslator {
  translateCommandToCriteria(
    command: SlackCommandMiddlewareArgs['payload']
  ): ScheduleCriteria;
}

export class ScheduleTranslatorImpl implements ScheduleTranslator {
  translateCommandToCriteria(
    command: SlackCommandMiddlewareArgs['payload']
  ): ScheduleCriteria {
    return {
      text: command.text,
    };
  }
}
