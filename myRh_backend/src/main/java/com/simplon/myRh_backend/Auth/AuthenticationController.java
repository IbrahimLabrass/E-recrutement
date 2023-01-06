package com.simplon.myRh_backend.Auth;

import com.simplon.myRh_backend.company.Company;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    @PostMapping("/register")
    public ResponseEntity<AuthenticationRequest> register(@RequestBody AuthenticationRequest registerRequest){
        //TODO: register user
        return ResponseEntity.ok(new AuthenticationResponse("token"));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest authRequest){
        //TODO: register user

        return ResponseEntity.ok(new AuthenticationResponse("token"));
    }

}
