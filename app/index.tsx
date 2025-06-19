import { useRouter } from "expo-router"
import { useState } from "react"
import { FlatList, Image, ListRenderItem, Text, TextInput, TouchableOpacity, View } from "react-native"

type Servico = {
  id: string
  titulo: string
  descricao: string
  preco: string
  imagem: any
}

const mockServicos = [
  {
    id: "1",
    titulo: "Eletricista Residencial",
    descricao: "Serviços de elétrica residencial com garantia",
    preco: "R$ 120,00/hora",
    imagem: require("../assets/images/eletricista.png"),
  },
  {
    id: "2",
    titulo: "Encanador",
    descricao: "Reparos hidráulicos rápidos e confiáveis",
    preco: "R$ 100,00/hora",
    imagem: require("../assets/images/encanador.png"),
  },
  {
    id: "3",
    titulo: "Jardineiro",
    descricao: "Manutenção de jardins e paisagismo",
    preco: "R$ 80,00/hora",
    imagem: require("../assets/images/jardineiro.png"),
  },
  {
    id: "4",
    titulo: "Diarista",
    descricao: "Limpeza completa para sua casa ou apartamento",
    preco: "R$ 150,00/diária",
    imagem: require("../assets/images/diarista.png"),
  },
  {
    id: "5",
    titulo: "Pintor",
    descricao: "Pintura residencial e comercial com acabamento profissional",
    preco: "R$ 200,00/dia",
    imagem: require("../assets/images/pintor.png"),
  },
  {
    id: "6",
    titulo: "Pedreiro",
    descricao: "Construção, reforma e pequenos reparos",
    preco: "R$ 250,00/dia",
    imagem: require("../assets/images/pedreiro.png"),
  },
]

export default function Index() {
  const router = useRouter()
  const [searchText, setSearchText] = useState("")

  const filteredServicos = searchText.trim() === ""
  ? mockServicos
  : mockServicos.filter((servico) => {
      const lowerText = searchText.toLowerCase()
      return (
        servico.titulo.toLowerCase().includes(lowerText) ||
        servico.descricao.toLowerCase().includes(lowerText)
      )
    })

  const renderItem: ListRenderItem<Servico> = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        alignItems: "center",
      }}
    >
      <Image
        source={item.imagem}
        style={{ width: 60, height: 60, borderRadius: 8, marginRight: 16 }}
        resizeMode="cover"
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.titulo}</Text>
        <Text style={{ marginVertical: 6 }}>{item.descricao}</Text>
        <Text style={{ fontWeight: "600", marginBottom: 8 }}>{item.preco}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#007AFF",
            paddingVertical: 8,
            borderRadius: 6,
            alignItems: "center",
            width: 100,
          }}
          onPress={() => router.push("/login")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Contratar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <Text style={{
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20,
      }}>
        Bertioga Tem
      </Text>

      <TextInput
        placeholder="Pesquisar serviços..."
        value={searchText}
        onChangeText={setSearchText}
        style={{
          height: 40,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          marginHorizontal: 16,
          paddingHorizontal: 10,
          marginBottom: 16,
        }}
      />
      <FlatList
        data={filteredServicos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 20, fontSize: 16 }}>
            Nenhum serviço encontrado
          </Text>
        }
      />
    </View>
  )
}
