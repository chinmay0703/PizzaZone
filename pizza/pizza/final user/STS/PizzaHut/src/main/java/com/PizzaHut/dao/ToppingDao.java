package com.PizzaHut.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.PizzaHut.entities.Toppings;


public interface ToppingDao extends JpaRepository<Toppings, Integer>{
	Optional<Toppings> findByToppingId(int id);
}
