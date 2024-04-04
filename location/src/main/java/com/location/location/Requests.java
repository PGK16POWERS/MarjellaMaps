package com.location.location;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/active")
public class Requests {

    private final MongoTemplate mongoTemplate;

    @Autowired
    public Requests(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @GetMapping("/getActiveBarbers")
    public List<Barber> getActiveBarbers() {
        // Query the "ActiveBarber" collection in the "QuickKut" database
        List<Barber> activeBarbers = mongoTemplate.findAll(Barber.class, "ActiveBarbers");
        System.out.println(activeBarbers);
        return activeBarbers;
    }
}
