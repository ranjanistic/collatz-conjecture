"""
    Collatz conjecture
    
    @author Priyanshu Ranjan (ranjanistic)
 
"""
ranges = {}

def resolve(n):
    def res(num):
        if num < n:
            if ranges[num] and ranges[num].__contains__(1):
                ranges[n].extend(ranges[num])
                return 1
            
        if num % 2 != 0:
            x = 3 * num + 1
        else:
            x = num // 2
        ranges[n].append(x)
        return 1 if x == 1 else res(x)
    
    return res(n)


limit = int(input("Enter positive integral limit: "))
for x in range(1,limit+1):
    ranges[x] = []
    resolve(x)

for key in ranges.keys():
    if ranges[key][len(ranges[key])-1] != 1:
        print("Key disproving conjecture: ", key, ranges[key])
else:
    print("No keys disproving conjecture found.")

m = []
for x in ranges.keys():
    m.append({ x: len(ranges[x]) })

vals = []
for z in m:
    vals.append(list(z.values())[0])
maxim = m[vals.index(max(vals))]

h = []
for g in ranges.keys():
    h.append({ g: max(ranges[g]) })

vals = []
for y in h:
    vals.append(list(y.values())[0])
highest = h[vals.index(max(vals))]

print("Max steps: ", maxim);
print("Highest step: ", highest);

if str(input("View ranges? (Y/N) ")).lower() == "y":
    print(ranges)
