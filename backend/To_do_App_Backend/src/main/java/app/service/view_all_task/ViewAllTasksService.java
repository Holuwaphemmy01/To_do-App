package app.service.view_all_task;

import app.model.Task;

import java.util.List;

public interface ViewAllTasksService {
    List<Task> getAllTasks(String username);
}
