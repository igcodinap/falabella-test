import { Request, Response } from "express";

class PrimeControllerClass {
    public getList = (req: Request, res: Response) => {
        const end: number = +req.params.end;
        // Calculate primes
            const result = this.calculateList(end);
            res.status(200).json({ result });
            return

    }

    public calculateList = (end: number): number[] => {
        var result:number[] = [];
        // Generate list
        var list:number[] = [];
        for (var i = 2; i <= end; i++) {
          list.push(i);
        }
      
        // Find primes and eliminate their multiples - Sieve of Eratosthenes
        var len = list.length;
        var limit = Math.sqrt(len);
        for (i = 0; i <= limit; i++) {
          if (list[i]) {
            for (var pos = i + list[i]; pos < len; pos += list[i]) {
              list[pos] = 0;
            }
          }
        }
      
        for (i = 0; i <= len; i++) {
          list[i] && result.unshift(list[i]);
        }
        return result;
    }

}

export const PrimeController = new PrimeControllerClass();