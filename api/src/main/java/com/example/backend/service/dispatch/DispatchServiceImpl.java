package com.example.backend.service.dispatch;

import com.example.backend.model.Dispatch;
import com.example.backend.model.InventoryItem;
import com.example.backend.repository.DispatchRepository;
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
public class DispatchServiceImpl implements DispatchService{
    private final DispatchRepository dispatchRepository;

    public Dispatch saveDispatch(Dispatch dispatch){
        log.info("Saving dispatch {} to the database",dispatch.getDispatch_id());
        return dispatchRepository.save(dispatch);
    }
    public List<Dispatch> getDispatches(){
        log.info("Fetching all dispatch");
        return dispatchRepository.findAll();
    }
    public Dispatch getDispatch(Long id){
        log.info("Get {} order dispatch from database",id);
        return dispatchRepository.findById(id).get();
    }
    public void deleteDispatch(Long id){
        log.info("Delete dispatch");
        dispatchRepository.deleteById(id);
    }
    public Dispatch updateDispatch(Long id,Dispatch dispatch){
        Dispatch existingDispatch = dispatchRepository.findById(id).get();

        if (Objects.nonNull(dispatch.getDueDate())) {
            existingDispatch.setDueDate(dispatch.getDueDate());
        }
        if (Objects.nonNull(dispatch.getStatus())) {
            existingDispatch.setStatus(dispatch.getStatus());
        }

        return dispatchRepository.save(existingDispatch);
    }
    public List<Dispatch> getDispatchFromSender(Long id){
        log.info("Get dispatch data from sender");
        return dispatchRepository.findAllBySenderId(id);
    }
    public List<Dispatch> getDispatchFromReceiver(Long id){
        log.info("Get dispatch data from receiver");
        return dispatchRepository.findAllByReceiverId(id);
    }
}
