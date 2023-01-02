package com.simplon.myRh_backend.job_offer;

import org.springframework.stereotype.Service;

@Service
public class JobOfferService {


    private final JobOfferRepository jobOfferRepository;


    public JobOfferService(JobOfferRepository jobOfferRepository) {
        this.jobOfferRepository = jobOfferRepository;
    }

    public JobOffer save(JobOffer jobOffer){
        return jobOfferRepository.save(jobOffer);
    }
}
