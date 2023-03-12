package com.PizzaHut.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.PizzaHut.entities.Item;
import com.PizzaHut.entities.ItemImage;

public interface ItemImageDao extends JpaRepository<ItemImage, Integer>{
}
