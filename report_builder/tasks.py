from celery import shared_task
import logging
logger = logging.getLogger(__name__)

@shared_task
def report_builder_file_async_report_save(report_id, user_id, file_type):
    logger.info(f"Asynchronous task initiated: report_id={report_id}, user_id={user_id}, file_type={file_type}")

    from .views import DownloadFileView
    view = DownloadFileView()
    view.process_report(report_id, user_id, file_type, to_response=False)

    logger.info(f"Asynchronous task completed: report_id={report_id}")