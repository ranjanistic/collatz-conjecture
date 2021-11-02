ranges = {}

def resolve(n):
    def res(num):
        if (num % 2 != 0):
            x = (3 * num + 1)
        else:
            x = (num // 2)
        ranges[n].append(x)
        return 1 if x == 1 else res(x)
    
    return res(n)


limit = int(input("Enter limit: "))
for x in range(1,limit+1):
    ranges[x] = []
    resolve(x)

for key in ranges.keys():
    if ranges[key][len(ranges[key])-1] != 1:
        print("Key exploiting rule", key, ranges[key])
else:
    print("No key exploiting rule found")
print(ranges)

