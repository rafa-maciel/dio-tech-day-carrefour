package me.techday.carrefour.topzera.config.beans;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class BeansFactory {
    private static final String BASE_URL = "https://mercado.carrefour.com.br/api/";

    @Bean
    public WebClient webClient() {
        return WebClient.create(BASE_URL);
    }
}
