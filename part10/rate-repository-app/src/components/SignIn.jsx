import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import * as yup from 'yup';
import { useFormik } from 'formik';
import theme from '../theme';
import Text from './Text';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    //.min(4, 'Username must contain a minimum of 4 characters')
    .required('Username is required'),
  password: yup
    .string()
    //.min(8, 'Password must contain a minimum of 8 characters')
    .required('Password is required'),
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 4,
    gap: 15,
  },
  button: {
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    padding: 15,
    borderRadius: 4,
  },
  input: {
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#000000",
  },
  inputWrong: {
    borderColor: "red",
  },
  inputContainer: {
    gap: 5,
  },
});

const Input = ({ formik, placeholder, name, secureTextEntry }) => {
  const isWrong = formik.touched[name] && formik.errors[name]
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, isWrong && styles.inputWrong]}
        placeholder={placeholder}
        value={formik.values[name]}
        onChangeText={formik.handleChange(name)}
        onBlur={formik.handleBlur(name)}
        secureTextEntry={secureTextEntry}
      />
      {isWrong && (
        <Text style={{ color: 'red' }}>{formik.errors[name]}</Text>
      )}
    </View>
  );
};

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <Input
        formik={formik}
        placeholder="Username"
        name="username"
        secureTextEntry={false}
      />
      <Input
        formik={formik}
        placeholder="Password"
        name="password"
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text
          color="textWhite"
          fontWeight={"bold"}
        >
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = values => {
    const username = (values.username);
    const password = (values.password);

    if (username && password) {
      console.log(`signed in as ${username} ${password}`);
    } else {
      console.log(`NO! ${username} ${password}`);
    }
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;