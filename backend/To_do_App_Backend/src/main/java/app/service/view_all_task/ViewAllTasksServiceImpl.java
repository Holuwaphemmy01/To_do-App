package app.service.view_all_task;

import app.model.Task;
import app.repository.TaskRepository;
import app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ViewAllTasksServiceImpl implements ViewAllTasksService {
    @Autowired
    private TaskRepository taskRepository;


    @Autowired
    private UserRepository userRepository;


    @Override
    public List<Task> getAllTasks(String username) {
        List<Task> result = null;
        if (!userRepository.existsById(username)) throw new RuntimeException("User not found");
            result = taskRepository.findAllByUserId(username);
        return result;

    }

}
