package com.shoe.shop.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "size")
public class Size implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @NotNull
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    private Integer value;

    @ManyToMany(mappedBy="sizes")
    private List<Shoe> shoes;

}


