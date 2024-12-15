package app.service.view_all_task;

import app.dtos.response.TaskResponse;
import app.model.Task;
import app.repository.TaskRepository;
import app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
        List<TaskResponse> taskResponses = new ArrayList<>();
         result = taskRepository.findAllByUserId(username);
        if (result == null||result.isEmpty()) throw new IllegalArgumentException("You have no task currently running");

//        for (Task task : result) {
//                TaskResponse taskResponse = new TaskResponse();
//                taskResponse.setTaskId(task.getTaskId());
//                taskResponse.setTitle(task.getTitle());
//                taskResponse.setDescription(task.getDescription());
//                taskResponse.setCompleted(task.isCompleted());
//                taskResponse.setDueDate(task.getDueDate());
//                taskResponses.add(taskResponse);
//            }
//        System.out.println(taskResponses.size());
        return result;

    }

}
