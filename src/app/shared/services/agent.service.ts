import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ReceivingAgent} from '../../agent/_models/receiving-agent';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AgentService {
  agentApi = 'https://ld0a3g1n5h.execute-api.us-east-2.amazonaws.com/dev';
  constructor(private http: HttpClient) { }

  public  getAgents() {
    return this.http.get<ReceivingAgent[]>(`${this.agentApi}/list-agents`);
  }
  public getAgentById(ID: number) {
    return this.http.get(`${this.agentApi}/get-agent/${ID}`);
  }
  public addAgent(agent: ReceivingAgent) {
    return this.http.post(`${this.agentApi}/add-agent/${agent.ID}`, agent, httpOptions);
  }
}
