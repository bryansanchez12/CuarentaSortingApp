import random

answer = []
answer2 = []
sampleSize = 8
answerSize = 0

while answerSize < sampleSize:
    r = random.randint(0,15)
    if r not in answer:
        answerSize += 1
        answer.append(r)

answerSize2 = 0
copycat = answer.copy()

while answerSize2 < sampleSize:
    s = random.randint(0,15)
    if s not in copycat:
        answerSize2 += 1
        answer2.append(s)
        copycat.append(s)

print(answer)
print(answer2)

print("Results:")
print("")

i = 0
while i < 8:
    print("> Group " + str(i+1) + ": " + str(answer[i]) + " vs " + str(answer2[i]))
    i += 1
    