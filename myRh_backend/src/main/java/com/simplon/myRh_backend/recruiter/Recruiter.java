package com.simplon.myRh_backend.recruiter;

import com.simplon.myRh_backend.company.Company;
import jakarta.persistence.*;

@Entity
public class Recruiter {

    @Id
    @GeneratedValue(generator = "recruiter_id_seq")
    @SequenceGenerator(name = "recruiter_id_seq", sequenceName = "recruiter_id_seq", allocationSize = 1)
    private Long id;

    private String fullName;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    @ManyToOne
    private Company company;


    public Recruiter() {
    }

}
