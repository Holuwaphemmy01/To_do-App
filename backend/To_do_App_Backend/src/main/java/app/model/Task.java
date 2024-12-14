package app.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document
public class Task {
    private String userId;
    @Id
    private String taskId;
    private String title;
    private String description;
    private boolean completed;
    private Date dueDate;
}
