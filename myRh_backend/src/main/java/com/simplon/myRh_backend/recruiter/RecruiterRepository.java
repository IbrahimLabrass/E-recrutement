package com.simplon.myRh_backend.recruiter;

import com.simplon.myRh_backend.company.Company;
import org.springframework.stereotype.Repository;

@Repository
public interface RecruiterRepository
        extends org.springframework.data.jpa.repository.JpaRepository<Recruiter, Long> {

    public Recruiter findByCompany(Company company);


}
