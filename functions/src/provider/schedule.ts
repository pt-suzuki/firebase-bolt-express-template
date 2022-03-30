import { ScheduleRepositoryImpl } from '~/domains/schedule/schedule_repository';
import { ScheduleTranslatorImpl } from '~/domains/schedule/schedule_translator';
import { ScheduleServiceImpl } from '~/domains/schedule/schedule_service';

const scheduleTranslator = new ScheduleTranslatorImpl();
const scheduleRepository = new ScheduleRepositoryImpl(scheduleTranslator);

const scheduleService = new ScheduleServiceImpl(
  scheduleTranslator,
  scheduleRepository
);

export { scheduleService, scheduleTranslator };
