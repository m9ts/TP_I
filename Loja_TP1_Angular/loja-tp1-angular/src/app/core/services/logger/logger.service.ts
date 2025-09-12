import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  info(msg: String, extra?: unknown){ // unknown testa instância de outros tipos
    console.info(msg, extra ?? '');
  }

  warn(msg: String, extra?: unknown){
    console.warn(msg, extra ?? '');
  }

  error(msg: String, extra?: unknown){
    console.error(msg, extra ?? '');
  }

}
