package app.service.view_all_task;

import app.dtos.response.TaskResponse;
import app.model.Task;
import app.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ViewAllTasksServiceImpl implements ViewAllTasksService {

    @Autowired
    private TaskRepository taskRepository;


    @Override
    public List<TaskResponse> getAllTasks(String username) {
        List<TaskResponse> taskResponses = new ArrayList<>();
        List<Task> result  = taskRepository.findAllByUserId(username);
        if (result == null||result.isEmpty()){
            return new ArrayList<>();
        }

        for (Task task : result) {
                TaskResponse taskResponse = new TaskResponse();
                taskResponse.setTaskId(task.getTaskId());
                taskResponse.setTitle(task.getTitle());
                taskResponse.setDescription(task.getDescription());
                taskResponse.setCompleted(task.isCompleted());
               taskResponse.setDueDate(task.getDueDate());
                taskResponses.add(taskResponse);
            }
        return taskResponses;

    }

    @Override
    public TaskResponse getTaskByUserName(String username) {
        Task result = taskRepository.findTasksByUserId(username);
        if(result == null) throw new IllegalArgumentException("Task does not exist");
        TaskResponse taskResponse = new TaskResponse();
        taskResponse.setTaskId(result.getTaskId());
        taskResponse.setTitle(result.getTitle());
        taskResponse.setDescription(result.getDescription());
        taskResponse.setCompleted(result.isCompleted());
        return taskResponse;
    }




}
