package com.simplon.myRh_backend.Auth;

import com.simplon.myRh_backend.agent.Agent;
import com.simplon.myRh_backend.company.Company;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

    private String token;
    private Company company;

    private Agent agent;
}
