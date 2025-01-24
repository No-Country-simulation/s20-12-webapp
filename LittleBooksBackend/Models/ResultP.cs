namespace LittleBooksBackend.Models
{
    public class ResultP<T>
    {
        public bool IsSuccess { get; }
        public T? Value { get; }
        public string? ErrorMessage { get; }

        private ResultP(bool isSuccess, T? value, string? errorMessage)
        {
            IsSuccess = isSuccess;
            Value = value;
            ErrorMessage = errorMessage;
        }

        // Método estático para un resultado exitoso
        public static ResultP<T> Success(T value) => new ResultP<T>(true, value, null);

        // Método estático para un resultado fallido
        public static ResultP<T> Failure(string errorMessage) => new ResultP<T>(false, default, errorMessage);
    }
}
