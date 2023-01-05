package com.simplon.myRh_backend.utils;

public class JobOfferNotFoundException extends RuntimeException {
    public JobOfferNotFoundException(String message) {
        super(message);
    }
}
