package com.simplon.myRh_backend.Auth;

import com.simplon.myRh_backend.company.Company;
import com.simplon.myRh_backend.company.CompanyService;
import com.simplon.myRh_backend.config.JwtService;
import com.simplon.myRh_backend.utils.Role;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final CompanyService companyService;

    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(Company registerRequest) {
        Company company = new Company();
        company.setName(registerRequest.getName());
        company.setEmail(registerRequest.getEmail());
        company.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        company.setAddress(registerRequest.getAddress());
        company.setPhone(registerRequest.getPhone());
        company.setLogo(registerRequest.getLogo());
        company.setCity(registerRequest.getCity());
        company.setRole(Role.COMPANY);
        companyService.save(company);
        var token = jwtService.generateToken(company);
        return AuthenticationResponse.builder().token(token).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest authRequest) {
        try{
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authRequest.getEmail(),
                            authRequest.getPassword()
                    )
            );
        }catch (Exception e){
            throw new RuntimeException(e.getMessage());
        }
        Company company = companyService.findByEmail(authRequest.getEmail());
        company.setAuthorities(company.getRole().toString());

        var token = jwtService.generateToken(company);
        // build token and get company by email
        return AuthenticationResponse.builder().token(token).company(company).build();
    }
}
