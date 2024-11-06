package com.cloudthat.productsapp.entity;

import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.NotBlank;

@Embeddable
public class ProductProperties {
    private String productColor;
    @NotBlank
    private Integer productLength;
    @NotBlank
    private Integer productWidth;
    private Integer productHeight;

    public ProductProperties(){

    }
    public ProductProperties(Integer productLength, String productColor, Integer productWidth, Integer productHeight) {
        this.productLength = productLength;
        this.productColor = productColor;
        this.productWidth = productWidth;
        this.productHeight = productHeight;
    }

    public String getProductColor() {
        return productColor;
    }

    public void setProductColor(String productColor) {
        this.productColor = productColor;
    }

    public Integer getProductWidth() {
        return productWidth;
    }

    public void setProductWidth(Integer productWidth) {
        this.productWidth = productWidth;
    }

    public Integer getProductLength() {
        return productLength;
    }

    public void setProductLength(Integer productLength) {
        this.productLength = productLength;
    }

    public Integer getProductHeight() {
        return productHeight;
    }

    public void setProductHeight(Integer productHeight) {
        this.productHeight = productHeight;
    }
}