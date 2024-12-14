package app.repository;

import app.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TaskRepository extends MongoRepository<Task, String> {

    Task findTasksByTaskId(String taskId);

    List<Task> findAllByUserId(String userId);
}
