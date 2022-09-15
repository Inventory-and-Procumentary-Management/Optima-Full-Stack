package com.example.backend.service.orderProduct;

import com.example.backend.model.OrderProduct;

import java.util.List;

public interface OrderProductService {
    public OrderProduct saveOrderProduct(OrderProduct orderProduct);
    public List<OrderProduct> getOrderProducts();
    public OrderProduct getOrderProduct(Long id);
    public void deleteOrderProduct(Long id);
    public OrderProduct updateOrderProduct(Long id,OrderProduct orderProduct);
}
