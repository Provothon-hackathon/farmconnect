package farmconnect.farmconnect.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import farmconnect.farmconnect.auth.DTO.AuthRequestDTO;

@RestController
public class AuthController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;


      @PostMapping("/authenticate")
    public String token(@RequestBody AuthRequestDTO authRequest) {
        try{
           Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );
            if (authentication.isAuthenticated()) {
            return jwtService.authenticateAndGetToken(authRequest);
         }
        }
        catch(Exception e){
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password");
        }

        return "Invalid username or password";
    }
}
