package app.service.update_task;

import app.dtos.request.UpdateTaskRequest;
import app.model.Task;

public interface UpdateTaskService {
    Task updateTask(UpdateTaskRequest updateTaskRequest);
}
