package app.controllers;

import app.dtos.response.TaskResponse;
import app.repository.TaskRepository;
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
        @GetMapping("/view-all-task")
        public ResponseEntity<List<TaskResponse>> viewAll(@RequestParam String username) {
            try {
                List<TaskResponse> listOfTask = viewAllTasksService.getAllTasks(username);
                return ResponseEntity.ok(listOfTask);
            } catch (IllegalArgumentException e) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ArrayList<>());
            }
        }

    }


