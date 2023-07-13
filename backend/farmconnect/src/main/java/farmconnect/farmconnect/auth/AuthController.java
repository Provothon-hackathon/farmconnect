package farmconnect.farmconnect.auth;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import farmconnect.farmconnect.auth.DTO.AuthRequestDTO;
import farmconnect.farmconnect.user.UserService;

@RestController
public class AuthController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;


      @PostMapping("/authenticate")
    public ResponseEntity<Object> token(@RequestBody AuthRequestDTO authRequest) {
        String username = authRequest.getUsername();

        try{
           Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );
            if (authentication.isAuthenticated()) {
                Map<String, Object> mp = new HashMap<>();
                mp.put("token", jwtService.generateToken(username));
                mp.put("role", userService.getUserByEmail(username).getRole());

                return ResponseEntity.status(HttpStatus.OK).body(mp);
         }
        }
        catch(Exception e){
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password");
        }

        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password");
    }
}
