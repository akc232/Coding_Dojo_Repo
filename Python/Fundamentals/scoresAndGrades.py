def school():
    score=[];
    average=0;
    import random;

    for i in range(10):
        score.append(random.randrange(55, 100,));
        # print score[i]
        if score[i]<=59:
            grade= "Score:"' '+ str(score[i])+' '"Your Grade is.. F. F Fanntasss...Im kidding FAILURE";
            print grade;
        if score[i] >=60 and score[i] <=69:
            grade= "Score:" ' '+ str(score[i])+ " ""Your Grade is a D. WOW... Way to study";
            print grade;
            average+=score[i]
        elif score[i] >69 and score[i] <=79:
            grade= "Score:"' ' + str(score[i])+ " ""Your Grade is a C. Your kinda cool.";
            print grade;
            average+=score[i]
        elif score[i] >79 and score[i] <=89:
            grade= "Score:"' ' + str(score[i])+ " ""Your Grade is a B. Great Job!";
            print grade;
            average+=score[i]
        elif score[i] > 89 and score[i]<=100:
            grade= "Score:"' ' + str(score[i])+ " ""Your Grade is a A. Youre Awesome!";
            print grade;
            average+=score[i]
    print "The Class Average is"' ' +(str(average/10))+' '"percent!";
    print 'End of Program BYE!';
school()
