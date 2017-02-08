def coinToss(flip):
    attempt=1;
    count_h=0;
    count_t=0;
    import random;
    for toss in range(flip):
        toss=random.random()
        tossround= round(toss)
        heads= "This is attempt:"" ""#"+str(attempt)+' '"Throwing coin.."' '"Its Heads!" "Got" +str(count_h)+' '"Head(s) so far, and"' '+str(count_t)+' '"so far."
        tails= "This is attempt:"" ""#"+str(attempt)+' '"Throwing coin.."' '"Its Tails!"' '"Got" +str(count_h)+' '"Head(s) so far, and"' '+str(count_t)+' '"so far."
        if tossround==0:
            count_h+=1
            attempt= attempt+1;
            print heads;
        elif tossround==1:
            count_t+=1
            attempt = attempt+1;
            print tails;

coinToss(5000);
