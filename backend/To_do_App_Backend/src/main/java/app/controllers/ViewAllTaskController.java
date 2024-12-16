package app.controllers;

import app.dtos.response.TaskResponse;
import app.service.view_all_task.ViewAllTasksServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

import static org.springframework.http.HttpStatus.OK;

    @RestController
    @RequestMapping("/to-do-app")
    @Slf4j
    public class ViewAllTaskController {

        @Autowired
        private ViewAllTasksServiceImpl viewAllTasksService;


        @CrossOrigin("*")
        @GetMapping("/view-all-task/{username}")
        public ResponseEntity<?> viewAll(@PathVariable String username) {
            try {
                List<TaskResponse> listOfTask = viewAllTasksService.getAllTasks(username);
                return ResponseEntity.status(OK).body(listOfTask );
            } catch (IllegalArgumentException e) {
                log.info(Arrays.toString(e.getStackTrace()));
                return ResponseEntity.status(OK).body(e.getStackTrace());

            }
        }


    }


