import json

china = open("china.txt","r")
japan = open("japan.txt","r")

china_genome,japan_genome = {},{}
china_genome_str = ''; japan_genome_str = ''

for gene in china.readlines():
    gene = gene.strip().split()
    china_genome[int(gene[0])] = gene[1:]
    china_genome_str += ''.join(gene[1:])

for gene in japan.readlines():
    gene = gene.strip().split()
    japan_genome[int(gene[0])] = gene[1:]
    japan_genome_str += ''.join(gene[1:])

with open('genome/china.json', 'w') as fp:
    json.dump(china_genome, fp)

with open('genome/japan.json', 'w') as fp:
    json.dump(japan_genome, fp)

with open("genome/china.txt","w") as fp:
    fp.write(china_genome_str)

with open("genome/japan.txt","w") as fp:
    fp.write(japan_genome_str)