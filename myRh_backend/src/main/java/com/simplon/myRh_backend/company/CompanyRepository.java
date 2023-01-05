package com.simplon.myRh_backend.company;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    public Company findByEmail(String email);

    Company findByName(String name);
}
