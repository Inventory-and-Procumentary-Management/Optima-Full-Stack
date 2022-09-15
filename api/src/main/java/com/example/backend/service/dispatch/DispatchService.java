package com.example.backend.service.dispatch;

import com.example.backend.model.Dispatch;

import java.util.List;

public interface DispatchService {
    public Dispatch saveDispatch(Dispatch dispatch);
    public List<Dispatch> getDispatches();
    public Dispatch getDispatch(Long id);
    public void deleteDispatch(Long id);
    public Dispatch updateDispatch(Long id,Dispatch dispatch);
    public List<Dispatch> getDispatchFromSender(Long id);
    public List<Dispatch> getDispatchFromReceiver(Long id);
}
