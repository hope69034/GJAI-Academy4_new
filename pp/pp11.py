def solution(n,a,b):
	import math
	t = int(math.log2(n))
	count = 0 
	for i in range(1,t+1):
		if a < b :
			count+=1
			if a <= n/(2**i) and n/(2**i) < b :

				return t		
			else:

				t-=1
				a=math.ceil(a/2)
				b=math.ceil(b/2)
		elif a > b : 
			count+=1
			if b <= n/(2**i) and n/(2**i) < a :
				return t
			else:
				t-=1
				a=math.ceil(a/2)
				b=math.ceil(b/2)
		elif a == b :
			count+=1
			return count-1
 

print(solution(16,10,9))   