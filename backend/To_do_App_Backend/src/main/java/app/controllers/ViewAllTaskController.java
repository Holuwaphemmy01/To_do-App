package app.controllers;

import app.dtos.response.TaskResponse;
import app.model.Task;
import app.service.view_all_task.ViewAllTasksServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

    @RestController
    @RequestMapping("/to-do-app")
    public class ViewAllTaskController {

        @Autowired
        private ViewAllTasksServiceImpl viewAllTasksService;

        @CrossOrigin("*")
        @GetMapping("/view-all-task/{userName}")
        public ResponseEntity<List<TaskResponse>> viewAll(@PathVariable String userName) {
            try {
                // Fetch tasks using the service
                List<Task> listOfTask = viewAllTasksService.getAllTasks(userName);

                // Convert List<Task> to List<TaskResponse>
                List<TaskResponse> taskResponses = new ArrayList<>();
                for (Task task : listOfTask) {
                    TaskResponse taskResponse = new TaskResponse();
                    taskResponse.setTaskId(task.getTaskId());
                    taskResponse.setTitle(task.getTitle());
                    taskResponse.setDescription(task.getDescription());
                    taskResponse.setCompleted(task.isCompleted());
                    taskResponses.add(taskResponse);
                }

                // Return the task responses
                return ResponseEntity.ok(taskResponses);

            } catch (IllegalArgumentException e) {
                // Handle no tasks case (404 Not Found)
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);

            } catch (Exception e) {
                // Handle unexpected errors (500 Internal Server Error)
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
            }
        }
    }


