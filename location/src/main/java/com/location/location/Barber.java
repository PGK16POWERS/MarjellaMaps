package com.location.location;

@SuppressWarnings("unused")
public class Barber {
    private String id;
    private String name;
    private Location location; // Nested Location object

    // Getters and setters (or Lombok annotations if you're using Lombok)

    public static class Location {
        private String type;
        private String[] coordinates; // Change the data type to String[]

        // Getters and setters (or Lombok annotations if you're using Lombok)
    }
}
