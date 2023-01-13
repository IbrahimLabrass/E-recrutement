package com.simplon.myRh_backend.job_offer;

import com.simplon.myRh_backend.company.Company;
import com.simplon.myRh_backend.utils.EmailSenderService;
import com.simplon.myRh_backend.utils.JobOfferNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobOfferService {


    private final JobOfferRepository jobOfferRepository;

    private final EmailSenderService emailSenderService;


    @Autowired
    public JobOfferService(JobOfferRepository jobOfferRepository, EmailSenderService emailSenderService) {
        this.jobOfferRepository = jobOfferRepository;
        this.emailSenderService = emailSenderService;
    }

    public JobOffer save(JobOffer jobOffer) {
        // send email to admin when a job offer is created
        emailSenderService.sendEmail("oussamaelbechari@gmail.com", "New Job Offer", "A new job offer has been created");
        return jobOfferRepository.save(jobOffer);
    }

    public JobOffer findById(Long id) {
        return jobOfferRepository.findById(id).get();
    }

    public List<JobOffer> findAll() {
        return jobOfferRepository.findAll();
    }

    public List<JobOffer> findJobOfferByTitle(String title) {

        return jobOfferRepository.findJobOfferByTitleContains(title).orElseThrow(() -> new JobOfferNotFoundException("Job offer with title " + title + " does not exists"));
    }

    public List<JobOffer> findJobOfferByCompany(Company company) {
        return jobOfferRepository.findJobOffersByCompany(company).orElseThrow(() -> new JobOfferNotFoundException("Job offer with company " + company.getName() + " does not exists"));
    }

    public JobOffer updateJobOffer(JobOffer jobOffer) {
        return jobOfferRepository.save(jobOffer);
    }

    public void deleteJobOffer(Long id) {
        jobOfferRepository.deleteById(id);
    }


}
