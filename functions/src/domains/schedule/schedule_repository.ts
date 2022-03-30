import { Schedule } from './schedule';
import { ScheduleTranslator } from './schedule_translator';

let id = 0;

const examples: Schedule[] = [
  { id: id++, name: 'example 0' },
  { id: id++, name: 'example 1' },
];

export interface ScheduleRepository {
  search(): Promise<Schedule[]>;
}

export class ScheduleRepositoryImpl implements ScheduleRepository {
  //private translator: ExamleTranslator;

  constructor(_: ScheduleTranslator) {
    //this.translator = translator;
  }

  async search(): Promise<Schedule[]> {
    return Promise.resolve(examples);
  }
}
