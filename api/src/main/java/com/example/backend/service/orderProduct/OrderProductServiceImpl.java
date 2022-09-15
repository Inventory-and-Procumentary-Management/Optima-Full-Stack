package com.example.backend.service.orderProduct;

import com.example.backend.model.OrderProduct;
import com.example.backend.repository.OrderProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class OrderProductServiceImpl implements OrderProductService{
    private final OrderProductRepository orderProductRepository;

    public OrderProduct saveOrderProduct(OrderProduct orderProduct){
        log.info("Saving order product {} to the database",orderProduct.getOrder_id());
        return orderProductRepository.save(orderProduct);
    }
    public List<OrderProduct> getOrderProducts(){
        log.info("Fetching all order products");
        return orderProductRepository.findAll();
    }
    public OrderProduct getOrderProduct(Long id){
        log.info("Get {} order product from database",id);
        return orderProductRepository.findById(id).get();
    }
    public void deleteOrderProduct(Long id){
        log.info("Delete order product");
        orderProductRepository.deleteById(id);
    }
    public OrderProduct updateOrderProduct(Long id,OrderProduct orderProduct){
        OrderProduct existingOrderProduct = orderProductRepository.findById(id).get();

        if (Objects.nonNull(orderProduct.getDiscount())) {
            existingOrderProduct.setDiscount(orderProduct.getDiscount());
        }
        if (Objects.nonNull(orderProduct.getAmount())) {
            existingOrderProduct.setAmount(orderProduct.getAmount());
        }
        if (Objects.nonNull(orderProduct.getQuantity())) {
            existingOrderProduct.setQuantity(orderProduct.getQuantity());
        }
        if (Objects.nonNull(orderProduct.getItemPrice())) {
            existingOrderProduct.setItemPrice(orderProduct.getItemPrice());
        }

        return orderProductRepository.save(existingOrderProduct);
    }
}
