package app.repository;

import app.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskRepository extends MongoRepository<Task, String> {

    Task findTasksByTaskId(String taskId);

    Task findAllByUserId(String username);
}
