import * as L from '~/helper/logger_helper';
import { ScheduleCriteria } from './schedule_criteria';
import { ScheduleRepository } from './schedule_repository';
import { ScheduleTranslator } from './schedule_translator';

export interface ScheduleService {
  search(criteria: ScheduleCriteria): Promise<string>;
}

export class ScheduleServiceImpl implements ScheduleService {
  //private translator: ScheduleTranslator;
  //private repository: ScheduleRepository;

  constructor(_: ScheduleTranslator, __: ScheduleRepository) {
    //this.translator = translator;
    // this.repository = repository;
  }

  async search(criteria: ScheduleCriteria): Promise<string> {
    L.info(criteria.text);
    return criteria.text;
  }
}
