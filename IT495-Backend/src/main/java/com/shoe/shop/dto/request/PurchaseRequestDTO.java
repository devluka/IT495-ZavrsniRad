package com.shoe.shop.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class PurchaseRequestDTO {

    private List<ItemRequestDTO> items;
}
