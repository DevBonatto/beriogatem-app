import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Register() {
  const router = useRouter()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleRegister = () => {
    if (nome === '' || email === '' || senha === '') {
      Alert.alert('Erro', 'Preencha todos os campos')
      return
    }
    Alert.alert('Sucesso', `Usuário ${nome} registrado!`)
    router.push('/login')
  }

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ position: 'absolute', top: 40, left: 10, padding: 10 }}
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={{ fontSize: 24, marginBottom: 20, textAlign: 'center' }}>
        Cadastro
      </Text>

      <TextInput
        placeholder="Nome"
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 15,
          borderRadius: 5,
        }}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 15,
          borderRadius: 5,
        }}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 15,
          borderRadius: 5,
        }}
        value={senha}
        onChangeText={setSenha}
      />

      <View style={{ marginBottom: 12, width: '100%' }}>
        <Button title="Cadastrar" onPress={handleRegister} />
      </View>

      <Button
        title="Já tenho conta"
        onPress={() => router.push('/login')}
        color="#666"
      />
    </View>
  )
}
